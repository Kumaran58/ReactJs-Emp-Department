package com.week24.ReactSpringD1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.week24.ReactSpringD1.dto.EmployeeDto;
import com.week24.ReactSpringD1.service.EmployeeService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeService s1;
	
	@PostMapping //--/api/Employees/ - in Post mapping
	public ResponseEntity<EmployeeDto> createDepartment(@RequestBody EmployeeDto dto){
		EmployeeDto e1=s1.createEmployee(dto);
		return new ResponseEntity<>(e1,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}") //--/api/Employees/id  in get mapping with id / pathvariable id in url itself
	public ResponseEntity<EmployeeDto> GetEmployeeByID(@PathVariable("id") long id){
		EmployeeDto e1=s1.getEmployeeById(id);
		return ResponseEntity.ok(e1);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<EmployeeDto> updatedEmployee(@PathVariable("id") long employeeId,
			@RequestBody EmployeeDto updatedEmployee) {
		EmployeeDto employeeDto = s1.updateEmployee(employeeId, updatedEmployee);
		return ResponseEntity.ok(employeeDto);
	}
	
	@GetMapping   //--/api/Employees  in get mapping
	public ResponseEntity<List<EmployeeDto>> GetAllEmployee(){
		List<EmployeeDto> d1=s1.getAllEmp();
		return ResponseEntity.ok(d1);
	}
	
	@DeleteMapping("{id}")   //--/api/Employees/id in delete mapping
	public ResponseEntity<String> DeleteEmployeeById(@PathVariable("id") long id){
		s1.deleteEmployee(id);;
		return ResponseEntity.ok("Employee deleted Sucessfully");
	}


}
