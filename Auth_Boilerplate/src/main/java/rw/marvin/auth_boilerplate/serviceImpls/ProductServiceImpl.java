package rw.marvin.auth_boilerplate.serviceImpls;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import rw.marvin.auth_boilerplate.models.Product;
import rw.marvin.auth_boilerplate.repositories.ProductRepository;
import rw.marvin.auth_boilerplate.services.ProductService;

import java.util.List;
import java.util.Optional;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll(Sort.by(Sort.Direction.DESC, "code"));
    }
//
//    @Override
//    public Product updateProduct(Long id, Product employee) {
//        Product employeeToUpdate = ProductRepository.findById(id).orElseThrow();
//        employeeToUpdate.setName(product.getName());
//        employeeToUpdate.setLastName(product.getLastName());
//        employeeToUpdate.setEmail(product.getEmail());
//        employeeToUpdate.setSalary(product.getSalary());
//        employeeToUpdate.setNationalId(product.getNationalId());
//
//        return productRepository.save(productToUpdate);
//    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
