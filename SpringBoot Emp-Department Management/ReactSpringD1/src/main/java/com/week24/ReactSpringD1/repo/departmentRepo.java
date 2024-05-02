package com.week24.ReactSpringD1.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.week24.ReactSpringD1.model.Department;

public interface departmentRepo extends JpaRepository<Department, Long> {

}
