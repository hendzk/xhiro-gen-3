const QRCode = require('qrcode');
const crc = require('crc');
const fs = require('fs');

// Fungsi untuk menghasilkan data QRIS dengan nominal
function generateQRISData(qrisData, paymentAmount) {
    // Generate QRIS code data with amount
    qrisData = qrisData.slice(0, -4);
    const step1 = qrisData.replace("010211", "010212");
    const step2 = step1.split("5802ID");

    const uang = "54" + ("0" + paymentAmount.length).slice(-2) + paymentAmount;
    const completeData = step2[0] + uang + step2[1] + convertCRC16(step2[0] + uang + step2[1]);

    return completeData;
}

// Fungsi untuk menghitung CRC16
function convertCRC16(str) {
    const crc16 = crc.crc16ccitt(Buffer.from(str, 'utf8')).toString(16).toUpperCase();
    return ("0000" + crc16).slice(-4);
}

// Fungsi untuk membuat QR code dan menyimpannya sebagai gambar
async function createAndSaveQRCode(data, filePath) {
    try {
        const qrCodeOptions = {
            errorCorrectionLevel: 'H',
            type: 'png',
            width: 250,
            height: 250,
            margin: 1,
        };

        const qrCodeDataURL = await QRCode.toDataURL(data, qrCodeOptions);
        const base64Data = qrCodeDataURL.replace(/^data:image\/png;base64,/, '');
        fs.writeFileSync(filePath, base64Data, 'base64');
        console.log(`QR code saved to ${filePath}`);
    } catch (err) {
        console.error(err);
    }
}

// Fungsi untuk menghasilkan nama file acak
function generateRandomFileName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result + '.png';
}

module.exports = {
    generateQRISData,
    createAndSaveQRCode,
    generateRandomFileName,
};
