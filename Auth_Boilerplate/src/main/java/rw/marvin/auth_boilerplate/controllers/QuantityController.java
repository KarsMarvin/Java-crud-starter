package rw.marvin.auth_boilerplate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rw.marvin.auth_boilerplate.models.Quantity;
import rw.marvin.auth_boilerplate.services.QuantityService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/quantity")
@CrossOrigin("*")
public class QuantityController {

    private final QuantityService quantityService;

    @Autowired
    public QuantityController(QuantityService quantityService) {
        this.quantityService = quantityService;
    }

    @PostMapping("/register")
    public Quantity saveQuantity(@RequestBody Quantity quantity) {
        return quantityService.saveQuantity(quantity);
    }

    @GetMapping("/getAll")
    public List<Quantity> getAllQuantities() {
        return quantityService.getAllQuantities();
    }

    @GetMapping("/{id}")
    public Optional<Quantity> getQuantityById(@PathVariable Long id) {
        return quantityService.getQuantityById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteQuantity(@PathVariable Long id) {
        quantityService.deleteQuantity(id);
    }
}
