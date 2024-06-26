
export const responseApi = (res, statusCode, data, message) => {
    res.status(statusCode).json({
        statusCode,
        message,
        data,
        date: new Date()
    })
}