

package rw.marvin.auth_boilerplate.serviceImpls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rw.marvin.auth_boilerplate.models.Purchased;
import rw.marvin.auth_boilerplate.repositories.PurchasedRepository;
import rw.marvin.auth_boilerplate.services.PurchasedService;

import java.util.List;
import java.util.Optional;

@Service
public class PurchasedServiceImpl implements PurchasedService {

    private final PurchasedRepository purchasedRepository;

    @Autowired
    public PurchasedServiceImpl(PurchasedRepository purchasedRepository) {
        this.purchasedRepository = purchasedRepository;
    }

    @Override
    public Purchased savePurchased(Purchased purchased) {
        return purchasedRepository.save(purchased);
    }

    @Override
    public Optional<Purchased> getPurchasedById(Long id) {
        return purchasedRepository.findById(id);
    }

    @Override
    public List<Purchased> getAllPurchased() {
        return purchasedRepository.findAll();
    }

    @Override
    public void deletePurchased(Long id) {
        purchasedRepository.deleteById(id);
    }
}
