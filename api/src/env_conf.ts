let PORT: string = process.env.PORT || '3000';
let DB_URL: string = process.env.DB_URL || 'mongodb://localhost:27017/walmart_test';

export {
    PORT,
    DB_URL
}