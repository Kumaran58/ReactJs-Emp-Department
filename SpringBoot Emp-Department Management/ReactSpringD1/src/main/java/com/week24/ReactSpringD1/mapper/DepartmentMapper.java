package com.week24.ReactSpringD1.mapper;

import com.week24.ReactSpringD1.dto.DepartmentDto;
import com.week24.ReactSpringD1.model.Department;

public class DepartmentMapper {
	
	
	//covert department jpa entity to departmentdto
	
	public static DepartmentDto convertToDepatmentDto(Department d1) {
		return new DepartmentDto(d1.getId(), d1.getDepartmentName(), d1.getDepartmentDescription());
	}
	

	//covert departmentdto  to department jpa entity
	
	public static Department covertToDepartment(DepartmentDto dto1) {
		return new Department(dto1.getId(), dto1.getDepartmentName(), dto1.getDepartmentDescription());
	}

}
