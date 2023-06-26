package rw.marvin.auth_boilerplate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rw.marvin.auth_boilerplate.models.Purchased;

@Repository
public interface PurchasedRepository extends JpaRepository<Purchased, Long> {
    // Additional methods if needed
}
