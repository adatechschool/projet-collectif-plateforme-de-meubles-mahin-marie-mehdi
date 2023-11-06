import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'

function Sidebar(){
    return (
    <div className='container-fluid'>
       <div className='row'>
        <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100'>
            <div className='mt-3'></div>
            <div className='ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
                <span className='f5-4'>Filtres</span>
                <hr className='text-white d-none d-sm-block'></hr>
                <ul class="nav nav-pills flex-column" id='parentM'>
                    <li class="nav-item my-1">
                        <a href="#" class="nav-link text-white" aria-current="page">
                            <i className='bi bi-speedometer2'></i>
                            <span className='ms-2'>TEST</span>
                        </a>
                    </li>
                    <li class="nav-item my-1">
                        <a href="#submenu" class="nav-link text-white" data-bs-toggle='collapse' aria-current="page">
                            <i className='bi bi-grid'></i>
                            <span className='ms-2'>TEST2</span>
                            <i className='bi bi-arrow-down-short ms-3'></i>
                        </a>
                        <ul class="nav collapse ms-2 flex-column" id='submenu' data-bs-parent='#parentM'>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" aria-current="page">Item1test</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Item2Test</a>
                            </li>
                         
                        </ul>
                    </li>
                </ul>
            </div>
            <div class='dropdown-open'>
                <a class='btn border-none dropdown-toggle text-white' type='button' id='triggerId' data-bs-toggle="dropdown" aria-haspopup='true' aria-expanded='false'>
                    <i className='bi bi-person f5-4'></i><span className='fs-5 ms-3'>Catégories</span>
                </a>
                <div class='dropdown-menu' aria-labelledby='triggerId'>
                    <a class='dropdown-item' href='#'>Tables</a>
                    <a class='dropdown-item' href='#'>Buffets</a>
                </div>
            </div>
          </div>
        </div> 
    </div>)
}
export default Sidebar