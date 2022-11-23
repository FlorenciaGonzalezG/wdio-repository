import homePage from '../pages/home.page';
import articuloPage from '../pages/articulo.page';
import busquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';

describe('Busqueda', function () {
    DATOS.forEach(({articulo}) => {

    it('Debería buscar ${articulo}' , async () => {
        await homePage.abrir('/');
        await homePage.buscar(articulo);
        await assert.equal(await homePage.obtenerTextoBusqueda(),(articulo),'Error: no se mostro el texto esperado en la barra de busqueda');
        await assert.equal(await busquedaPage.obtenerNombreResultado(), (articulo), 'Error: no se mostro el header esperado');
      
    });
})

 it('Deberia buscar apple cinema, ingresar al articulo y seleccionar un color', async () => {
     await homePage.abrir('/');
    let articulo = 'apple cinema';
    await homePage.buscar(articulo);
    await assert.equal(await homePage.obtenerTextoBusqueda(),'apple cinema','Error: no se mostro el texto esperado en la barra de busqueda');
    await assert.equal(await busquedaPage.obtenerNombreResultado(), 'Apple Cinema 30"', 'Error: no se mostro el header esperado');
    await busquedaPage.ingresarAlResultado()
    await articuloPage.seleccionarColor(2)
    await browser.pause(5000);
 });
});

