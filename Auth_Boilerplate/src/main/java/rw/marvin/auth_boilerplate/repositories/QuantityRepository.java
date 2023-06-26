package rw.marvin.auth_boilerplate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rw.marvin.auth_boilerplate.models.Quantity;

@Repository
public interface QuantityRepository extends JpaRepository<Quantity, Long> {
    // Additional methods if needed
}
