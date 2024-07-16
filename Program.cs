var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "login",
    pattern: "{controller=Auth}/{action=Login}/{id?}");

    app.MapControllerRoute(
    name: "profile",
    pattern: "{controller=Profile}/{action=Profile}/{id?}");

    app.MapControllerRoute(
    name: "registration",
    pattern: "{controller=Registration}/{action=Registration}/{id?}");

    app.MapControllerRoute(
    name: "nhif",
    pattern: "{controller=Nhif}/{action=Nhif}/{id?}");

    app.MapControllerRoute(
    name: "results",
    pattern: "{controller=Results}/{action=Results}/{id?}");

    
app.Run();
