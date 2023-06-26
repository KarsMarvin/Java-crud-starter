package rw.marvin.auth_boilerplate.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

import java.util.Date;


@Getter
@Setter
@Entity
@NoArgsConstructor
//@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "product", uniqueConstraints = {@UniqueConstraint(columnNames = {"code"}), @UniqueConstraint(columnNames = {"name"})})
@OnDelete(action = OnDeleteAction.CASCADE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "code")
    private Long code;

    @Column(name = "name")
    private String productName;

    @Column(name = "type")
    private String productType;

    @Column(name = "price")
    private double price;

    @Column(name = "in_date")
    private Date inDate;

    public Product(String productName, String productType, double price, Date inDate) {
        this.productName = productName;
        this.productType = productType;
        this.price = price;
        this.inDate = inDate;
    }
}
