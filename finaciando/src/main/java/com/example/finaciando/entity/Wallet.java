package com.example.finaciando.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "wallet")
public class Wallet {

    @Id
    private String id;
    private String name;

    @Transient
    private double totalValue;

    @Transient
    private double inputValue;

    @Transient
    private double outputValue;
}
