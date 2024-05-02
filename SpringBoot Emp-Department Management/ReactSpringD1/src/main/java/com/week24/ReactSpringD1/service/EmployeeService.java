package com.week24.ReactSpringD1.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.week24.ReactSpringD1.dto.EmployeeDto;
import com.week24.ReactSpringD1.mapper.EmployeeMapper;
import com.week24.ReactSpringD1.model.Department;
import com.week24.ReactSpringD1.model.Employee;
import com.week24.ReactSpringD1.repo.EmployeeRepo;
import com.week24.ReactSpringD1.repo.departmentRepo;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeService {
	
	private EmployeeRepo r1;
	
	private departmentRepo d1;
	
	
	public EmployeeDto createEmployee(EmployeeDto dto) {
		Employee emp=EmployeeMapper.covertToEmployee(dto);
		Optional<Department> opt =d1.findById(dto.getDepartment_id());
		Department depart=null;
		if (opt != null) {
			 depart = opt.get();
		}
		
		emp.setD1(depart);
		Employee saved=r1.save(emp);
		return EmployeeMapper.convertToEmployeeDto(saved);
	}
	
	public EmployeeDto updateEmployee(long id,EmployeeDto updEmp) {
		Optional<Employee> opt=r1.findById(id);
		Employee e1 = null;
		if (opt.get() != null) {
			e1 = opt.get();
			}
		e1.setFirstName(updEmp.getFirstName());
		e1.setLastName(updEmp.getLastName());
		e1.setEmail(updEmp.getEmail());
		
		Optional<Department> optdep = d1.findById(updEmp.getDepartment_id());
		Department d1 = null;
		if (optdep.get() != null) {
			d1 = optdep.get();
		}
		e1.setD1(d1);
		Employee saved = r1.save(e1);
		return EmployeeMapper.convertToEmployeeDto(saved);
	}
	
	public EmployeeDto getEmployeeById(long id) {
		Optional<Employee> opt=r1.findById(id);
		Employee emp=opt.get();
		return EmployeeMapper.convertToEmployeeDto(emp);
	}
	
	public List<EmployeeDto> getAllEmp(){
		List<Employee> emps = r1.findAll();
		return emps.stream().map((employee) -> EmployeeMapper.convertToEmployeeDto(employee))
				.collect(Collectors.toList());
	}
	
	
	public void deleteEmployee(long id) {
		r1.deleteById(id);
	}
	

}
