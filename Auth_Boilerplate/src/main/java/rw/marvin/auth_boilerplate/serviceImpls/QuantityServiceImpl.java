package rw.marvin.auth_boilerplate.serviceImpls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rw.marvin.auth_boilerplate.models.Quantity;
import rw.marvin.auth_boilerplate.repositories.QuantityRepository;
import rw.marvin.auth_boilerplate.services.QuantityService;

import java.util.List;
import java.util.Optional;

@Service
public class QuantityServiceImpl implements QuantityService {

    private final QuantityRepository quantityRepository;

    @Autowired
    public QuantityServiceImpl(QuantityRepository quantityRepository) {
        this.quantityRepository = quantityRepository;
    }

    @Override
    public Quantity saveQuantity(Quantity quantity) {
        return quantityRepository.save(quantity);
    }

    @Override
    public Optional<Quantity> getQuantityById(Long id) {
        return quantityRepository.findById(id);
    }

    @Override
    public List<Quantity> getAllQuantities() {
        return quantityRepository.findAll();
    }

    @Override
    public void deleteQuantity(Long id) {
        quantityRepository.deleteById(id);
    }
}
