package rw.marvin.auth_boilerplate.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "purchased")
public class Purchased {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_code", referencedColumnName = "code")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "quantity_id", referencedColumnName = "id")
    private Quantity quantity;

    @Column(name = "total")
    private BigDecimal total;

    @Column(name = "date")
    private Date date;

    public Purchased(Product product, Quantity quantity, BigDecimal total, Date date) {
        this.product = product;
        this.quantity = quantity;
        this.total = total;
        this.date = date;
    }
}
