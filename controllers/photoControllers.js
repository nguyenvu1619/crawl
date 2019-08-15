import multer from 'multer';
import path from 'path';
import fs from 'fs';

const directoryPath = path.join(__dirname, '../public');

const getImage = async (req, res) => {
    try {
        const { pic } = req.params;
        console.log(pic);
        const Files = await fs.readdirSync(`${directoryPath}/images/${pic}`);
        return res.json({
            status: true,
            message: 'Success',
            data: Files
        });
    } catch (e) {
        return res.json({
            status: true,
            message: e,
            data: null
        });
    }
};

export default {
    getImage
};
