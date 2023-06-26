package rw.marvin.auth_boilerplate.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "quantity")
public class Quantity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_code", referencedColumnName = "code")
    private Product product;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "operation")
    private String operation;

    @Column(name = "date")
    private Date date;

    public Quantity(Product product, int quantity, String operation, Date date) {
        this.product = product;
        this.quantity = quantity;
        this.operation = operation;
        this.date = date;
    }
}
