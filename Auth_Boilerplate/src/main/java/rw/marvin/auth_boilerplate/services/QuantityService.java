package rw.marvin.auth_boilerplate.services;

import rw.marvin.auth_boilerplate.models.Quantity;

import java.util.List;
import java.util.Optional;

public interface QuantityService {
    Quantity saveQuantity(Quantity quantity);
    Optional<Quantity> getQuantityById(Long id);
    List<Quantity> getAllQuantities();
    void deleteQuantity(Long id);
}
