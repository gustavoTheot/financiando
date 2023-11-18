package com.example.finaciando.controller;

import com.example.finaciando.entity.Record;
import com.example.finaciando.entity.Wallet;
import com.example.finaciando.service.RecordService;
import com.example.finaciando.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/record")
public class RecordController {

    @Autowired
    RecordService recordService;

    @Autowired
    WalletService walletService;

    @GetMapping
    public List<Record> getRecord(){
        return recordService.findAll();
    }

    @PostMapping
    public ResponseEntity<Record> createRecord(@RequestBody Record record){
        Optional<Wallet> walletOptional = this.walletService.findById(record.getWallet().getId());
        Wallet wallet = walletOptional.get();

        LocalDate dataAtual = LocalDate.now();

        record.setData(dataAtual);

        recordService.inputs(wallet.getId());

        record.setWallet(wallet);
        recordService.save(record);


        return ResponseEntity.status(HttpStatus.CREATED).body(record);
    }
}
