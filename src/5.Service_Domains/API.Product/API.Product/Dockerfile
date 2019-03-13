#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1803 AS base
WORKDIR /app
EXPOSE 7101
EXPOSE 44397

FROM microsoft/dotnet:2.1-sdk-nanoserver-1803 AS build
WORKDIR /src
COPY ["API.Product/API.Product.csproj", "API.Product/"]
RUN dotnet restore "API.Product/API.Product.csproj"
COPY . .
WORKDIR "/src/API.Product"
RUN dotnet build "API.Product.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "API.Product.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "API.Product.dll"]