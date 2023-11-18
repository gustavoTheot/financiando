package com.example.finaciando.service;

import com.example.finaciando.entity.Record;
import com.example.finaciando.repository.RecordRepository;
import com.example.finaciando.utils.GeneratorId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecordService {

    @Autowired
    RecordRepository recordRepository;

    public List<Record> findAll(){
        return recordRepository.findAll();
    }

    public Record save(Record record){
        return recordRepository.save(record);
    }

    public double inputs(String id){
        List<Record> recordList = recordRepository.findAll();
        double newInputValue = 0;

        for(Record record: recordList){
            if(record.getWallet().getId().equals(id)){
                if(record.getType().equals("input")){
                    newInputValue += record.getValue();
                }
            }
        }

        return newInputValue;
    }

    public double outputs(String id){
        List<Record> recordList = recordRepository.findAll();
        double newOutputValue = 0;

        for(Record record: recordList){
            if(record.getWallet().getId().equals(id)){
                if(record.getType().equals("output")){
                    newOutputValue -= record.getValue();
                }
            }
        }
        return newOutputValue;
    }

    public double calcTotal(String id){
        double total = 0;

        total = outputs(id) + inputs(id);

        return total;
    }
}
