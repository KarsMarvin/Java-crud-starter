package rw.marvin.auth_boilerplate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rw.marvin.auth_boilerplate.models.Product;

import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}

