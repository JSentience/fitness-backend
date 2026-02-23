/*
  Warnings:

  - Changed the type of `price` on the `order_items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "NutritionFact" ALTER COLUMN "proteins" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "fats" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "fiber" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "carbohydrates" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "order_items" ALTER COLUMN "quantity" SET DEFAULT 1,
ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(65,30),
DROP COLUMN "price",
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "recipe_ingredients" ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(65,30);
