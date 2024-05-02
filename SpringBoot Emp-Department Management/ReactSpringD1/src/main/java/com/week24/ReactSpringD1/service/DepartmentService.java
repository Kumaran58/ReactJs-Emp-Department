package com.week24.ReactSpringD1.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.week24.ReactSpringD1.dto.DepartmentDto;
import com.week24.ReactSpringD1.mapper.DepartmentMapper;
import com.week24.ReactSpringD1.model.Department;
import com.week24.ReactSpringD1.repo.departmentRepo;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DepartmentService {

	private departmentRepo r1;

	public DepartmentDto createDepartment(DepartmentDto d1) {
		Department depart = DepartmentMapper.covertToDepartment(d1);
		Department saved = r1.save(depart);
		return DepartmentMapper.convertToDepatmentDto(saved);

	}

	public DepartmentDto getDepartmentById(long id) {
		Optional<Department> opt = r1.findById(id);
		if (opt != null) {
			Department depart = opt.get();
			return DepartmentMapper.convertToDepatmentDto(depart);
		}
		return null;
	}

	public List<DepartmentDto> getAllDepartment() {
		List<Department> d1s = r1.findAll();
		return d1s.stream().map((department) -> DepartmentMapper.convertToDepatmentDto(department))
				.collect(Collectors.toList());
	}

	public DepartmentDto updateDepartment(Long id, DepartmentDto updD1) {
		Optional<Department> opt = r1.findById(id);
		Department d1 = null;
		if (opt.get() != null) {
			d1 = opt.get();
			d1.setDepartmentName(updD1.getDepartmentName());
			d1.setDepartmentDescription(updD1.getDepartmentDescription());

			Department saved = r1.save(d1);
			return DepartmentMapper.convertToDepatmentDto(saved);
		}
		return null;
	}

	public void deleteDepartment(long id) {
		r1.deleteById(id);
	}

}
