/*
  Warnings:

  - You are about to drop the column `default_unit` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `recipe_ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `icon_url` on the `recipe_ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `recipe_ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `recipe_ingredients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[recipe_id]` on the table `recipe_steps` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon_url` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredients" DROP COLUMN "default_unit",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "icon_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order_items" ADD COLUMN     "price" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe_ingredients" DROP COLUMN "content",
DROP COLUMN "icon_url",
DROP COLUMN "name",
DROP COLUMN "price",
ALTER COLUMN "unit" SET DEFAULT 'GRAM';

-- CreateTable
CREATE TABLE "NutritionFact" (
    "id" TEXT NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "fiber" DOUBLE PRECISION NOT NULL,
    "carbohydrates" DOUBLE PRECISION NOT NULL,
    "recipe_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NutritionFact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecipeToRecipeTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_RecipeToRecipeTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "NutritionFact_recipe_id_key" ON "NutritionFact"("recipe_id");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_tags_name_key" ON "recipe_tags"("name");

-- CreateIndex
CREATE INDEX "_RecipeToRecipeTag_B_index" ON "_RecipeToRecipeTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_steps_recipe_id_key" ON "recipe_steps"("recipe_id");

-- AddForeignKey
ALTER TABLE "NutritionFact" ADD CONSTRAINT "NutritionFact_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToRecipeTag" ADD CONSTRAINT "_RecipeToRecipeTag_A_fkey" FOREIGN KEY ("A") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToRecipeTag" ADD CONSTRAINT "_RecipeToRecipeTag_B_fkey" FOREIGN KEY ("B") REFERENCES "recipe_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
