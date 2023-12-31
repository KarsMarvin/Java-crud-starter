package rw.marvin.auth_boilerplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Type;
import rw.marvin.auth_boilerplate.enums.EGender;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.UUID;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = {"email"}), @UniqueConstraint(columnNames = {"phone_number"})})
@OnDelete(action = OnDeleteAction.CASCADE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Type(type = "uuid-binary")
    @Column(name = "id", columnDefinition = "binary(16)")
    private UUID id;

    @Column(name = "first_name")
    private String firstName;

//    @Column(name = "last_name")
//    private String lastName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

//    @Column(name = "national_id")
//    private String nationalId;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "gender")
//    private EGender gender;

    @JsonIgnore
    @NotBlank
    @Column(name = "password")
    private String password;

//    public User(String firstName, String lastName, String phoneNumber, String email, EGender gender) {
//        this.firstName = firstName;
//        this.phoneNumber = phoneNumber;
//        this.email = email;
//    }

    public User(String firstName, String lastName, String phoneNumber, String email, EGender gender, String password) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }


}
