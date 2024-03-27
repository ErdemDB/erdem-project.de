FROM openjdk:17-slim AS build
WORKDIR /app
COPY ep-backend/pom.xml /app
COPY ep-backend/src /app/src
RUN mvn -f /app/pom.xml clean package

FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar
CMD ["java", "-jar", "app.jar"]