import React from  "react"

const Login =() =>{
    return (
        

        <div className="container w-75  mt-5 rounded">
        <div class="row ">
            <div class="col"> 

            </div>        
                    
                

            
            <div class="col bg-white rounded">
                <div class="text-end">

                </div>
                <h2 class="fw-bold text-center py-5">Bienvenido</h2>
                <form action="">
                    <div class="mb-4">
                        <label for="email" class="form-label">Correo electronico</label>
                        <input type="email" class = "form-control" name="email"/> 
                    </div>
                    <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                        <input type="password" class = "form-control" name="password"/> 
                    </div>
                    <div class="mb-4">
                    <input type="checkbox" name="connected" class="form-check-input" id=""/>
                    <label for="connected" class="form-check-label"  >Mantemerme Conectado </label>
                </div>
                <div class="d-grid">
                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </div>
            <div class="my-3">
                <span>No tienes cuenta? <a href="*">Registrate </a></span><br/>
                <span> <a href="*">Recuperar Password</a></span>
            </div>
                </form>
                

                <div class="container w-100 my-5">
                <div class="row text-center">
                    <div class="col-12">Iniciar Sesión</div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-outline-primary w-100 my-1"> 
                                <div class="row align-items-center" >
                                <div class="col-2 d-none d-md-block">
                                    <img src="/src/imagenes/facebook-logo.png" width= "32" alt=""/>

                                </div>
                                <div class="col-10 text-center" >facebook

                                </div>
                            </div>
                                
                            </button>
                            
                        </div>
                        <div class="col">
                            <div class="col">
                                <button class="btn btn-outline-danger w-100 my-1"> 
                                    <div class="row align-items-center" >
                                    <div class="col-2 d-none d-md-block">
                                        <img src="/src/imagenes/google.png" width= "32" alt=""/>
    
                                    </div>
                                    <div class="col-10 text-center" >Google
    
                                    </div>
                                </div>
                                    
                                </button>

                        </div>
                    </div>


                </div>
            </div>


            </div>
        </div>
    </div>
    </div>
    
    );
}
export default Login;

