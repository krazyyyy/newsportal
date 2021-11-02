from rssReader.models import ADsCode, footerHTML

def management(request):
    try:
        options = ADsCode.objects.get(access_name="admin")
    except:
        options = None
    try:
        footer = footerHTML.objects.get(access_name="admin")
    except:
        footer = None
    return {
        'options': options,
        'footer' : footer,
    }