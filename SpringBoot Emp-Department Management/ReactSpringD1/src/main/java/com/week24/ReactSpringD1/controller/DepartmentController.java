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

import com.week24.ReactSpringD1.dto.DepartmentDto;
import com.week24.ReactSpringD1.service.DepartmentService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
	
	@Autowired
	private DepartmentService s1;
	
	@PostMapping //--/api/departments/ - in Post mapping
	public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto dto){
		DepartmentDto d1=s1.createDepartment(dto);
		return new ResponseEntity<>(d1,HttpStatus.CREATED);
	}
	
	// Build Update Department REST API
		@PutMapping("{id}")
		public ResponseEntity<DepartmentDto> upadateDepartment(@PathVariable("id") long departmentId,
				@RequestBody DepartmentDto updatedDepartment) {
			DepartmentDto departmentDto = s1.updateDepartment(departmentId, updatedDepartment);
			return ResponseEntity.ok(departmentDto);
		}
	
	@GetMapping("{id}") //--/api/departments/id  in get mapping with id / pathvariable id in url itself
	public ResponseEntity<DepartmentDto> GetDepartmentByID(@PathVariable("id") long id){
		DepartmentDto d1=s1.getDepartmentById(id);
		return ResponseEntity.ok(d1);
	}
	
	@GetMapping   //--/api/departments  in get mapping
	public ResponseEntity<List<DepartmentDto>> GetAllDepartment(){
		List<DepartmentDto> d1=s1.getAllDepartment();
		return ResponseEntity.ok(d1);
	}
	
	@DeleteMapping("{id}")   //--/api/departments/id in delete mapping
	public ResponseEntity<String> DeleteDepartmentById(@PathVariable("id") long id){
		s1.deleteDepartment(id);;
		return ResponseEntity.ok("department deleted Sucessfully");
	}

}
