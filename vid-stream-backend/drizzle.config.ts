import { defineConfig } from "drizzle-kit";
import { CONFIG } from "~/common/env";

export default defineConfig({
    dialect: "mysql",
    schema: "./src/modules/*/schema.ts",
    out: "./src/lib/drizzle",
    dbCredentials: {
        url: CONFIG.DATABASE_URL
    }
})
