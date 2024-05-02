package com.week24.ReactSpringD1.dto;

import com.week24.ReactSpringD1.model.Department;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private long department_id;
	private String departmentName;
	

}
