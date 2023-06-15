package rw.pacis.ne.auth_boilerplate.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rw.pacis.ne.auth_boilerplate.models.Employee;
import rw.pacis.ne.auth_boilerplate.services.EmployeeService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {


    private final EmployeeService employeeService; //we are bringing in Employee Service instance

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    /**This is a post Request, here we are gonna ba saving an employee*/
    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }
    /** Here, we are getting all employee*/
    @GetMapping
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }
    /**here, we are geting one empployee*/
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable UUID id){
        return employeeService.getEmployeeById(id);
    }
    /**here, we get gonna be updating an employee*/
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable UUID id, @RequestBody Employee employee){
        return employeeService.updateEmployee(id,employee);
    }
    /**Here, we are gonna be deleting an employee*/
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable UUID id){
        employeeService.deleteEmployee(id);
    }
}
