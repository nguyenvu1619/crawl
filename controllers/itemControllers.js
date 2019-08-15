import itemModel from '../model/item';

const getAllItem = async (req, res) => {
    try {
        const items = await itemModel.find({});
        return res.json({
            status: true,
            message: 'success',
            data: items
        });
    } catch (e) {
        return res.json({
            status: false,
            message: e,
            data: null
        });
    }
};
const getHotItem = async (req, res) => {
    try {
        const items = await itemModel.find(
            {},
            [],
            {
                limit: 4,
                sort: {
                    buytimes: -1
                }
            }
        );
        return res.json({
            status: true,
            message: 'Success',
            data: items
        });
    } catch (e) {
        return res.json({
            status: false,
            message: e,
            data: null
        });
    }
};

const addItem = async (req, res) => {
    try {
        const {
            name, price, brand, color, style, src, buytimes, size
        } = req.body;
        const checkItem = itemModel.find({ name });
        if (checkItem) {
            return res.json({
                status: false,
                message: 'Product has been available'
            });
        }
        const newItem = {
            name,
            price,
            brand,
            color,
            style,
            src,
            buytimes,
            size
        };
        const result = await newItem.save();
        if (result) {
            return res.json({
                status: true,
                message: 'Success',
                data: newItem
            });
        }
    } catch (e) {
        return res.json({
            status: false,
            message: 'Server errors',
            data: null
        });
    }
};

export default {
    getAllItem,
    getHotItem,
    addItem
};
