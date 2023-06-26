package rw.marvin.auth_boilerplate.services;

import rw.marvin.auth_boilerplate.models.Product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductService {
    public Product saveProduct(Product product);
    public Optional<Product> getProductById(Long id);
    List<Product> getAllProduct();
//    Product updateProduct(Long id, Product product);
    void deleteProduct(Long id);
}
