package org.berlin.epbackend.mapper;

import org.berlin.epbackend.dto.TaskDTO;
import org.berlin.epbackend.entity.TaskEntity;
import org.mapstruct.*;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, builder = @Builder(disableBuilder = true))
public interface TaskMapper {

    void updateEntityFromDto(TaskDTO dto, @MappingTarget TaskEntity entity);

    TaskEntity dtoToEntity(TaskDTO taskDTO);

}