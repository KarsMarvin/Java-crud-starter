package rw.pacis.ne.auth_boilerplate.services;

import rw.pacis.ne.auth_boilerplate.models.Employee;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeeById(UUID id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(UUID id, Employee employee);
    void deleteEmployee(UUID id);
}
