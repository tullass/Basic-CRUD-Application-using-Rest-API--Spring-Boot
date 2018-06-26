package com.Sample.Entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Disciplina implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2583931609844011707L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String dis1;
	private String dis2;
	private String dis3;
	private String dis4;
	private String dis5;
	private String dis6;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDis1() {
		return dis1;
	}

	public void setDis1(String dis1) {
		this.dis1 = dis1;
	}

	public String getDis2() {
		return dis2;
	}

	public void setDis2(String dis2) {
		this.dis2 = dis2;
	}

	public String getDis3() {
		return dis3;
	}

	public void setDis3(String dis3) {
		this.dis3 = dis3;
	}

	public String getDis4() {
		return dis4;
	}

	public void setDis4(String dis4) {
		this.dis4 = dis4;
	}

	public String getDis5() {
		return dis5;
	}

	public void setDis5(String dis5) {
		this.dis5 = dis5;
	}

	public String getDis6() {
		return dis6;
	}

	public void setDis6(String dis6) {
		this.dis6 = dis6;
	}

}
