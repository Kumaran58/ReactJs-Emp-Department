package com.week24.ReactSpringD1.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.week24.ReactSpringD1.dto.DepartmentDto;
import com.week24.ReactSpringD1.dto.EmployeeDto;
import com.week24.ReactSpringD1.model.Department;
import com.week24.ReactSpringD1.model.Employee;
import com.week24.ReactSpringD1.repo.departmentRepo;
import com.week24.ReactSpringD1.service.DepartmentService;

public class EmployeeMapper {
	
	static DepartmentService s1;
	static DepartmentDto ans;
	

	public static EmployeeDto convertToEmployeeDto(Employee e1) {
		return new EmployeeDto(e1.getId(), e1.getFirstName(), e1.getLastName(),e1.getEmail(),e1.getD1().getId(),e1.getD1().getDepartmentName());
	}
	
	public static Employee covertToEmployee(EmployeeDto dto1) {
		Employee em=new Employee();
		em.setId(dto1.getId());
		em.setFirstName(dto1.getFirstName());
		em.setLastName(dto1.getLastName());
		em.setEmail(dto1.getEmail());
		return em;
	}


}
