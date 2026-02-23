/*
  Warnings:

  - You are about to alter the column `proteins` on the `NutritionFact` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `fats` on the `NutritionFact` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `fiber` on the `NutritionFact` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `carbohydrates` on the `NutritionFact` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `quantity` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `quantity` on the `recipe_ingredients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "NutritionFact" ALTER COLUMN "proteins" SET DATA TYPE INTEGER,
ALTER COLUMN "fats" SET DATA TYPE INTEGER,
ALTER COLUMN "fiber" SET DATA TYPE INTEGER,
ALTER COLUMN "carbohydrates" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "order_items" ALTER COLUMN "quantity" SET DEFAULT 1,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER,
ALTER COLUMN "price" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "recipe_ingredients" ALTER COLUMN "quantity" SET DATA TYPE INTEGER;
