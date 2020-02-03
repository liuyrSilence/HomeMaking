package com.briup.apps.ej.dao;

import com.briup.apps.ej.bean.BaseUser;
import com.briup.apps.ej.bean.BaseUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BaseUserMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    long countByExample(BaseUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int deleteByExample(BaseUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int insert(BaseUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int insertSelective(BaseUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    List<BaseUser> selectByExample(BaseUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    BaseUser selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int updateByExampleSelective(@Param("record") BaseUser record, @Param("example") BaseUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int updateByExample(@Param("record") BaseUser record, @Param("example") BaseUserExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int updateByPrimaryKeySelective(BaseUser record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table base_user
     *
     * @mbg.generated Mon Oct 28 12:57:00 CST 2019
     */
    int updateByPrimaryKey(BaseUser record);
}