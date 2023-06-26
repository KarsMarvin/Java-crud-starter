package rw.marvin.auth_boilerplate.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rw.marvin.auth_boilerplate.models.Product;
import rw.marvin.auth_boilerplate.services.ProductService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/product")
@CrossOrigin("*")
public class ProductController {


    private final ProductService productService; //we are bringing in Employee Service instance

    @Autowired
    public ProductController(ProductService employeeService) {
        this.productService = employeeService;
    }

    /**This is a post Request, here we are gonna ba saving an employee*/
    @PostMapping(path="/register")
    public Product saveProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }
    /** Here, we are getting all product*/
    @GetMapping(path = "/getAll")
    public List<Product> getAllProduct(){
        return productService.getAllProduct();
    }
    /**here, we are getting one product*/
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long code){
        return productService.getProductById(code);
    }
    /**here, we get going to  be updating an employee*/
//    @PutMapping("/{id}")
//    public Product updateEmployee(@PathVariable Long id, @RequestBody Product employee){
//        return productService.updateProduct(id,employee);
//    }
    /**Here, we are going to be deleting an employee*/
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id){
        productService.deleteProduct(id);
    }
}
