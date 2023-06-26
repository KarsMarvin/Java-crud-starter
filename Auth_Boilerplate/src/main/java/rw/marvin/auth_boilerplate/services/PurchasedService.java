package rw.marvin.auth_boilerplate.services;

import rw.marvin.auth_boilerplate.models.Purchased;

import java.util.List;
import java.util.Optional;


public interface PurchasedService {
    Purchased savePurchased(Purchased purchased);
    Optional<Purchased> getPurchasedById(Long id);
    List<Purchased> getAllPurchased();
    void deletePurchased(Long id);
}
