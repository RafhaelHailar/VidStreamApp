import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const Stream = mysqlTable("stream", {
   id: varchar({length: 100}).primaryKey()
});