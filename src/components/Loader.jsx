const Loader = () => {

    window.onload = function(){
        let contenedor = document.getElementById('contenedor-carga')
    
        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0'
    }
  return (
    <div id="contenedor-carga">
      <div id = "carga">
        <img src="/img/Loaderrick.ico" alt="" />
      </div>
    </div>
  )
}
export default Loader