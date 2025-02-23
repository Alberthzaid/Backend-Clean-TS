import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export class Database {
    private readonly MONGO_URI : string;
    private readonly DB_NAME : string;
    constructor() {
        this.MONGO_URI = process.env.MONGO_URI || '';
        this.DB_NAME = process.env.DB_NAME || '';
    }

    async connect(){
        try{
            const mongoCliente = await mongoose.connect(this.MONGO_URI, { dbName:this.DB_NAME || ''});
            console.log("✅ Conexión a MongoDB establecida correctamente");
            return mongoCliente;
        }catch(err){
            console.error(err);
        }
    }
}