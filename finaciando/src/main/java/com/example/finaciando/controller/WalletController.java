package com.example.finaciando.controller;

import com.example.finaciando.entity.Record;
import com.example.finaciando.entity.Wallet;
import com.example.finaciando.service.RecordService;
import com.example.finaciando.service.WalletService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/wallet")
public class WalletController {

    @Autowired
    WalletService walletService;

    @Autowired
    RecordService recordService;

    @GetMapping
    public ResponseEntity<List<Wallet>> getAllWallet(){
        List<Wallet> findWallet = walletService.findAll();


        for(Wallet wallet : findWallet){
            Optional<Wallet> optionalWallet = walletService.findById(wallet.getId());

            if(optionalWallet.isEmpty()){
                wallet.setTotalValue(recordService.calcTotal(wallet.getId()));
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(findWallet);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Wallet> getWalletFindById(@PathVariable String id){
        Optional<Wallet> searchId = walletService.findById(id);
        Wallet wallet = searchId.get();

        if(searchId.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        wallet.setTotalValue(recordService.calcTotal(wallet.getId()));
        wallet.setInputValue(recordService.inputs(wallet.getId()));
        wallet.setOutputValue(recordService.outputs(wallet.getId()));

        return ResponseEntity.status(HttpStatus.OK).body(wallet);
    }

    @PostMapping
    public ResponseEntity<Wallet> createWallet(@RequestBody Wallet wallet) {
        walletService.save(wallet);

        return ResponseEntity.status(HttpStatus.CREATED).body(wallet);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Wallet> updateWallet(@PathVariable String id, @RequestBody @Valid Wallet updatedWallet) {
        Optional<Wallet> walletOptional = walletService.findById(id);

        if (walletOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        Wallet wallet = walletOptional.get();
        wallet.setName(updatedWallet.getName());
        wallet.setTotalValue(updatedWallet.getTotalValue());
        wallet.setInputValue(updatedWallet.getInputValue());
        wallet.setOutputValue(updatedWallet.getOutputValue());

        return ResponseEntity.status(HttpStatus.OK).body(walletService.save(wallet));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Object> updateTotal(@PathVariable String id, @RequestBody Wallet totalValue){
        Optional<Wallet> walletOptional = walletService.findById(id);

        if(walletOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        Wallet wallet = walletOptional.get();
        double newTotal = totalValue.getTotalValue();
        wallet.setTotalValue(newTotal);

        return ResponseEntity.status(HttpStatus.OK).body(walletService.save(wallet));
    }

    @PatchMapping("outputValue/{id}")
    public ResponseEntity<Object> updateOutputValue(@PathVariable String id, @RequestBody Wallet outputValue){
        Optional<Wallet> walletOptional = walletService.findById(id);

        if(walletOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        Wallet wallet = walletOptional.get();
        double newOutputValue = outputValue.getOutputValue();

        double calcTotalValue = wallet.getTotalValue() - newOutputValue;
        wallet.setOutputValue(wallet.getOutputValue() + newOutputValue);
        wallet.setTotalValue(calcTotalValue);

        return ResponseEntity.status(HttpStatus.OK).body(walletService.save(wallet));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteFinancial(@PathVariable String id){
        Optional<Wallet> wallet = walletService.findById(id);

        walletService.delete(wallet.get());
        return ResponseEntity.status(HttpStatus.OK).body(wallet.get());
    }
}
