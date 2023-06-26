package rw.marvin.auth_boilerplate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rw.marvin.auth_boilerplate.models.Purchased;
import rw.marvin.auth_boilerplate.services.PurchasedService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/purchased")
@CrossOrigin("*")
public class PurchasedController {

    private final PurchasedService purchasedService;

    @Autowired
    public PurchasedController(PurchasedService purchasedService) {
        this.purchasedService = purchasedService;
    }

    @PostMapping("/register")
    public Purchased savePurchased(@RequestBody Purchased purchased) {
        return purchasedService.savePurchased(purchased);
    }

    @GetMapping("/getAll")
    public List<Purchased> getAllPurchased() {
        return purchasedService.getAllPurchased();
    }

    @GetMapping("/{id}")
    public Optional<Purchased> getPurchasedById(@PathVariable Long id) {
        return purchasedService.getPurchasedById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePurchased(@PathVariable Long id) {
        purchasedService.deletePurchased(id);
    }
}
