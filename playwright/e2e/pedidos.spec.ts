import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert
/// PAV - Preparar, Agir, Verificar

test('deve consultar um pedido aprovado', async ({ page }) => {
    //Arrange
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  //Act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-KI2LJM');
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();

  //Assert
  
  // Code Challenge: Você consegue testar sem Test-ID?
  await expect(page.getByText('VLO-KI2LJM')).toBeVisible({ timeout: 10000 });
  await expect(page.getByTestId('order-result-VLO-KI2LJM')).toContainText('VLO-KI2LJM');

  //await expect(page.getByTestId('order-result-id')).toBeVisible({ timeout: 10000 })
  //await expect(page.getByTestId('order-result-id')).toContainText('VLO-KI2LJM')

  // Code Challenge: Você consegue testar sem Test-ID?
  await expect(page.getByText('APROVADO')).toBeVisible();
  await expect(page.getByTestId('order-result-VLO-KI2LJM')).toContainText('APROVADO');

  //await expect(page.getByTestId('order-result-status')).toBeVisible()
  //await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

})